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

export const getAddressObject = (address_components) => {
  var ShouldBeComponent = {
    state: [
      "administrative_area_level_1",
      "administrative_area_level_2",
      "administrative_area_level_3",
      "administrative_area_level_4",
      "administrative_area_level_5",
    ],
    city: [
      "locality",
      "sublocality",
      "sublocality_level_1",
      "sublocality_level_2",
      "sublocality_level_3",
      "sublocality_level_4",
    ],
    county: ["administrative_area_level_2"],
    country: ["country"],
  };

  var address = {
    state: "",
    city: "",
    county: "",
    country: "",
  };
  address_components.forEach((component) => {
    for (var shouldBe in ShouldBeComponent) {
      if (ShouldBeComponent[shouldBe].indexOf(component.types[0]) !== -1) {
        if (shouldBe === "country") {
          address[shouldBe] = component.short_name;
        } else {
          address[shouldBe] = component.long_name;
        }
      }
    }
  });
  return address;
};

export const toFormData = (o) => {
  return Object.entries(o).reduce(
    (d, e) => (d.append(...e), d),
    new FormData()
  );
};
