"use client";

import { useRef, useEffect, useState } from "react";
import Script from "next/script";
import { useRouter } from "next/navigation";
import FormControl from "react-bootstrap/FormControl";
import FormText from "react-bootstrap/FormText";
import Alert from "react-bootstrap/Alert";

import { getAddressObject } from "../scripts/utils";

const AutoComplete = ({ onSelect }) => {
  const [error, setError] = useState();
  const router = useRouter();

  const autoCompleteRef = useRef();
  const inputRef = useRef();
  const options = {
    componentRestrictions: { country: "us" },
    fields: ["address_components", "geometry"],
    types: ["address"],
  };

  useEffect(() => {
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current,
      options
    );
    autoCompleteRef.current.addListener("place_changed", async function () {
      setError(false);
      const place = await autoCompleteRef.current.getPlace();
      const address = getAddressObject(place.address_components);
      if (address.state !== "Arizona" || address.country !== "US") {
        setError(true);
      } else {
        router.push(
          `/ballot?${new URLSearchParams({
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
            city: address.city,
            county: address.county.replace("County", ""),
          }).toString()}`
        );
      }
    });
  }, []);
  return (
    <>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_MAPS_API_KEY}&libraries=places`}
        strategy="beforeInteractive"
      />
      <FormControl
        placeholder="Home Address"
        size="lg"
        type="text"
        className="my-4 mx-auto"
        style={{ maxWidth: "400px" }}
        ref={inputRef}
      />
      {error ? (
        <Alert variant="danger">
          We are sorry but you must be a resident of Arizona and the US.
        </Alert>
      ) : null}

      <FormText>
        Not comfortable giving your address?
        <br />
        Just pick an address within a quarter mile.
      </FormText>
    </>
  );
};
export default AutoComplete;
