export const formatUsername = (username) => username.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
