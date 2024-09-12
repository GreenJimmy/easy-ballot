import FormCheck from "react-bootstrap/FormCheck";

export const BallotBlock = ({ section }) => {
  const { elections = [], demarcations = {} } = section;
  return (
    <>
      <li key={`${section.name}`}>
        <h4>{section.name}</h4>
        <ul>
          {elections.map((election) => {
            const hasPref = election.candidates.find(
              (candidate) => candidate.picked !== "NotPicked"
            );

            return (
              <li key={`${section.name}:${election.name}`}>
                <h4>{election.name}</h4>
                <ul className="candidates">
                  {hasPref ? (
                    election.candidates.map((candidate) => {
                      return candidate.picked !== "NotPicked" ? (
                        <li
                          key={`${section.name}:${election.name}:${candidate.name}`}
                        >
                          <div
                            className={`candidate party-${candidate.party.toLowerCase()}`}
                          >
                            <FormCheck
                              type="radio"
                              id={`${election.name}:${candidate.name}`}
                              name={election.name}
                              label={candidate.name}
                              value={candidate.name}
                            />
                          </div>
                        </li>
                      ) : null;
                    })
                  ) : (
                    <li>
                      <h6 style={{ fontSize: "1.25rem" }}>No Preference</h6>
                    </li>
                  )}
                </ul>
              </li>
            );
          })}
        </ul>
      </li>
      {Object.keys(demarcations).map((demarcationKey) => (
        <li key={`${section.name}:${demarcationKey}`}>
          <h4>{demarcationKey}</h4>
          {demarcations[demarcationKey].map((subSection) => (
            <ul key={`${subSection.name}`}>
              <BallotBlock section={subSection} />
            </ul>
          ))}
        </li>
      ))}
    </>
  );
};
