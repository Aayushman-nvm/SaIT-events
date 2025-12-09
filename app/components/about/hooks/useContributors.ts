"use client";

import { useState, useEffect } from "react";
import { ContributorData } from "../../../../types/about";

export function useContributors() {
  const [contributors, setContributors] = useState<ContributorData[]>([]);

  useEffect(() => {
    const fetchContributors = async () => {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

      try {
        // Fetch contributors from GitHub API
        const response = await fetch(
          "https://api.github.com/repos/deveshyaara/SaIT-events/contributors",
          { signal: controller.signal }
        );
        clearTimeout(timeoutId);
        if (response.ok) {
          const data = await response.json();
          setContributors(data);
        } else {
          // Fallback to mock data if API fails
          setContributors([
            {
              login: "deveshyaara",
              avatar_url: "https://github.com/deveshyaara.png",
              html_url: "https://github.com/deveshyaara",
              contributions: 50,
            },
          ]);
        }
      } catch (error) {
        clearTimeout(timeoutId);
        if (error instanceof Error && error.name === 'AbortError') {
          console.warn("Fetch aborted due to timeout");
        } else {
          console.error("Failed to fetch contributors:", error);
        }
        // Fallback to mock data
        setContributors([
          {
            login: "deveshyaara",
            avatar_url: "https://github.com/deveshyaara.png",
            html_url: "https://github.com/deveshyaara",
            contributions: 50,
          },
        ]);
      }
    };

    fetchContributors();
  }, []);

  return contributors;
}