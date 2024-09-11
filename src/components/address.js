"use client";

import { useRef, useEffect } from "react";
import Script from "next/script";
import FormControl from "react-bootstrap/FormControl";
import FormText from "react-bootstrap/FormText";

const AutoComplete = () => {
  const autoCompleteRef = useRef();
  const inputRef = useRef();
  const options = {
    componentRestrictions: { country: "us" },
    fields: ["address_components", "geometry", "icon", "name"],
    types: ["address"],
  };
  useEffect(() => {
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current,
      options
    );
  }, []);
  return (
    <>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_MAPS_API_KEY}&libraries=places`}
        strategy="beforeInteractive"
      />
      <FormControl
        size="lg"
        type="text"
        placeholder="Large text"
        className="my-4 mx-auto"
        style={{ maxWidth: "400px" }}
        ref={inputRef}
      />
      <FormText>
        Not comfortable giving your address?
        <br />
        Just pick an address within a quarter mile.
      </FormText>
    </>
  );
};
export default AutoComplete;
