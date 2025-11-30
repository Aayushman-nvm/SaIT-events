import { Types } from 'mongoose';

export interface CardProps {
  id?: Types.ObjectId;
  title: string;
  imgPath: string;
  btnType: string;
  description: string;
  index?: number;
}

export function getCardStatus(title: string) {
  return {
    isActive: title.includes('Active'),
    statusText: title.includes('Active') ? 'Live Now' : 'Archive',
    statusIcon: title.includes('Active') ? 'users' : 'calendar',
  };
}

export function getButtonStyles(btnType: string) {
  return btnType === "Primary"
    ? {
        gradient: "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800",
        shadow: "0 10px 40px rgba(239, 68, 68, 0.3)",
      }
    : {
        gradient: "bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800",
        shadow: "0 10px 40px rgba(75, 85, 99, 0.3)",
      };
}