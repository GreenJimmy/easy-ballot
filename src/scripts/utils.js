export const getSubDomain = (host) => {
  const parts = host.split(":")[0].split(".");
  const bad_subs = (process.env.BAD_SUBS || "").split(",");
  if (
    (parts.length > 2 || (parts.length === 2 && parts[1] === "localhost")) &&
    bad_subs.indexOf(parts[0]) === -1
  ) {
    return parts[0];
  }

  return false;
};
