"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEdit, FaTrash, FaPlus, FaEye, FaCheck, FaTimes, FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa';
import { Types } from 'mongoose';
import { useRouter } from 'next/navigation';

interface Event {
  _id: Types.ObjectId;
  title: string;
  description: string;
  info: string;
  poster: string;
  status: string;
  registrationLink: string;
  socialLink: string;
}

function AdminManagePage() {
  const router = useRouter();
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [viewingEvent, setViewingEvent] = useState<Event | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  // Fetch all events
  const fetchEvents = async () => {
    try {
      const response = await fetch('/api/events');
      if (response.ok) {
        const eventsData = await response.json();
        setEvents(eventsData);
      }
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Handle view event
  const handleViewEvent = (eventId: string, openInNewTab = false) => {
    try {
      const url = `/events/${eventId}`;
      if (openInNewTab) {
        window.open(url, '_blank', 'noopener,noreferrer');
      } else {
        router.push(url);
      }
    } catch (error) {
      console.error('Error navigating to event:', error);
      alert('Error opening event page');
    }
  };

  // Delete event
  const handleDelete = async (eventId: string) => {
    try {
      const response = await fetch(`/api/events/${eventId}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        setEvents(events.filter(event => event._id.toString() !== eventId));
        setDeleteConfirm(null);
        alert('Event deleted successfully!');
      } else {
        alert('Failed to delete event');
      }
    } catch (error) {
      console.error('Error deleting event:', error);
      alert('Error deleting event');
    }
  };

  // Get status color
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'ongoing': return 'text-green-400 bg-green-400/20';
      case 'upcoming': return 'text-blue-400 bg-blue-400/20';
      case 'ended': return 'text-gray-400 bg-gray-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const EventCard = ({ event }: { event: Event }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-900/50 border border-gray-700 rounded-2xl p-6 backdrop-blur-sm hover:border-red-500/50 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
          <p className="text-gray-400 text-sm mb-3 line-clamp-2">{event.description}</p>
          <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(event.status)}`}>
            {event.status}
          </div>
        </div>
        
        {event.poster && (
          <div className="ml-4 w-20 h-20 rounded-lg overflow-hidden bg-gray-800">
            <img 
              src={event.poster} 
              alt={event.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>

      <div className="flex gap-2">
        <motion.div className="flex-1 relative group">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              const openInNewTab = e.ctrlKey || e.metaKey;
              handleViewEvent(event._id.toString(), openInNewTab);
            }}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
            title="Click to view, Ctrl+Click to open in new tab"
          >
            <FaEye size={16} />
            View
          </motion.button>
          
          {/* Dropdown menu on hover */}
          <div className="absolute bottom-full left-0 mb-2 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
            <div className="bg-gray-800 border border-gray-600 rounded-lg shadow-xl overflow-hidden">
              <button
                onClick={() => setViewingEvent(event)}
                className="w-full px-4 py-2 text-sm text-white hover:bg-gray-700 transition-colors flex items-center gap-2"
              >
                <FaEye size={12} />
                Quick Preview
              </button>
              <button
                onClick={() => handleViewEvent(event._id.toString(), true)}
                className="w-full px-4 py-2 text-sm text-white hover:bg-gray-700 transition-colors flex items-center gap-2"
              >
                <FaExternalLinkAlt size={12} />
                Open in New Tab
              </button>
            </div>
          </div>
        </motion.div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setEditingEvent(event)}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
        >
          <FaEdit size={16} />
          Edit
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setDeleteConfirm(event._id.toString())}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
        >
          <FaTrash size={16} />
          Delete
        </motion.button>
      </div>
    </motion.div>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading events...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute w-96 h-96 border border-red-500/10 rounded-full -top-48 -right-48"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-red-500/20 rounded-full mb-8"
          >
            <FaCalendarAlt className="w-10 h-10 text-red-500" />
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Manage Events
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full mb-8" />
          
          <motion.a
            href="/admin"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-xl transition-all duration-300 shadow-xl"
          >
            <FaPlus size={20} />
            Create New Event
          </motion.a>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event._id.toString()}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <EventCard event={event} />
            </motion.div>
          ))}
        </div>

        {events.length === 0 && !loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-400 py-20"
          >
            <p className="text-xl mb-4">No events found. Create your first event!</p>
            <motion.a
              href="/admin"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors"
            >
              <FaPlus size={16} />
              Create Event
            </motion.a>
          </motion.div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gray-900 border border-red-500/50 rounded-2xl p-8 max-w-md mx-4"
          >
            <h3 className="text-xl font-bold text-white mb-4">Confirm Delete</h3>
            <p className="text-gray-300 mb-6">
              Are you sure you want to delete this event? This action cannot be undone.
            </p>
            
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleDelete(deleteConfirm)}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl transition-colors"
              >
                <FaCheck size={16} />
                Delete
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setDeleteConfirm(null)}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-xl transition-colors"
              >
                <FaTimes size={16} />
                Cancel
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Edit Event Modal */}
      {editingEvent && (
        <EditEventModal 
          event={editingEvent}
          onClose={() => setEditingEvent(null)}
          onSuccess={() => {
            setEditingEvent(null);
            fetchEvents();
          }}
        />
      )}

      {/* Event Preview Modal */}
      {viewingEvent && (
        <EventPreviewModal 
          event={viewingEvent}
          onClose={() => setViewingEvent(null)}
        />
      )}
    </div>
  );
}

// Edit Event Modal Component
function EditEventModal({ 
  event, 
  onClose, 
  onSuccess 
}: { 
  event: Event; 
  onClose: () => void; 
  onSuccess: () => void; 
}) {
  const [formData, setFormData] = useState({
    title: event.title,
    description: event.description,
    info: event.info,
    poster: event.poster,
    status: event.status,
    registrationLink: event.registrationLink,
    socialLink: event.socialLink,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`/api/events/${event._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Event updated successfully!');
        onSuccess();
      } else {
        alert('Failed to update event');
      }
    } catch (error) {
      console.error('Error updating event:', error);
      alert('Error updating event');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 overflow-y-auto"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-gray-900/90 border border-gray-700 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-white">Edit Event</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaTimes size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Event Title
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:border-red-500 focus:outline-none"
                required
              />
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Status
              </label>
              <select
                value={formData.status}
                onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value }))}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:border-red-500 focus:outline-none"
                required
              >
                <option value="ongoing">Ongoing</option>
                <option value="upcoming">Upcoming</option>
                <option value="ended">Ended</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              rows={4}
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:border-red-500 focus:outline-none resize-none"
              required
            />
          </div>

          {/* Info */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Event Information
            </label>
            <textarea
              value={formData.info}
              onChange={(e) => setFormData(prev => ({ ...prev, info: e.target.value }))}
              rows={5}
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:border-red-500 focus:outline-none resize-none"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Poster URL */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Poster URL
              </label>
              <input
                type="url"
                value={formData.poster}
                onChange={(e) => setFormData(prev => ({ ...prev, poster: e.target.value }))}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:border-red-500 focus:outline-none"
                required
              />
            </div>

            {/* Registration Link */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Registration Link
              </label>
              <input
                type="url"
                value={formData.registrationLink}
                onChange={(e) => setFormData(prev => ({ ...prev, registrationLink: e.target.value }))}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:border-red-500 focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Social Link */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Social Link
            </label>
            <input
              type="url"
              value={formData.socialLink}
              onChange={(e) => setFormData(prev => ({ ...prev, socialLink: e.target.value }))}
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:border-red-500 focus:outline-none"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-4">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
              className={`flex-1 py-4 font-semibold rounded-xl transition-all duration-300 ${
                isSubmitting
                  ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                  : 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white'
              }`}
            >
              {isSubmitting ? 'Updating...' : 'Update Event'}
            </motion.button>

            <motion.button
              type="button"
              onClick={onClose}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 py-4 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-xl transition-colors"
            >
              Cancel
            </motion.button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}

// Event Preview Modal Component
const EventPreviewModal = ({ event, onClose }: { event: Event | null; onClose: () => void }) => {
  if (!event) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-gray-800 rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-gray-800 border-b border-gray-700 p-6 rounded-t-xl">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white">Event Preview</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-2xl"
            >
              ×
            </button>
          </div>
        </div>
        
        <div className="p-6">
          {event.poster && (
            <div className="mb-4">
              <img 
                src={event.poster} 
                alt={event.title}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          )}
          
          <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
          
          <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
            <div>
              <span className="text-gray-400">Status:</span>
              <p className={`font-medium ${event.status === 'published' ? 'text-green-400' : 'text-yellow-400'}`}>
                {event.status}
              </p>
            </div>
            <div>
              <span className="text-gray-400">ID:</span>
              <p className="text-white text-xs font-mono">{event._id.toString()}</p>
            </div>
            {event.registrationLink && (
              <div className="col-span-2">
                <span className="text-gray-400">Registration:</span>
                <a href={event.registrationLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 ml-2">
                  View Registration Link
                </a>
              </div>
            )}
            {event.socialLink && (
              <div className="col-span-2">
                <span className="text-gray-400">Social:</span>
                <a href={event.socialLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 ml-2">
                  View Social Link
                </a>
              </div>
            )}
          </div>
          
          <div className="mb-4">
            <span className="text-gray-400">Description:</span>
            <p className="text-white mt-1 leading-relaxed">{event.description}</p>
          </div>

          {event.info && (
            <div className="mb-4">
              <span className="text-gray-400">Additional Info:</span>
              <p className="text-white mt-1 leading-relaxed">{event.info}</p>
            </div>
          )}
          
          <div className="flex gap-2 pt-4 border-t border-gray-700">
            <button
              onClick={() => window.open(`/events/${event._id}`, '_blank')}
              className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <FaExternalLinkAlt size={14} />
              Open Full View
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AdminManagePage;