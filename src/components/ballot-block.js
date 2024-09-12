import { Form } from "react-bootstrap";
import FormCheck from "react-bootstrap/FormCheck";

export const BallotBlock = ({
  section,
  showAll = false,
  showChecks = false,
  fieldName = "country",
}) => {
  const { elections = [], demarcations = {} } = section;
  const passFieldName = `${
    fieldName ? fieldName + (section.name !== "US" ? "." : "") : ""
  }${section.name !== "US" ? section.name : ""}`;

  return (
    <>
      <li key={`${section.name}`}>
        <h4>{section.name}</h4>
        <ul>
          {elections.map((election) => {
            const hasPref =
              showAll ||
              election.candidates.find(
                (candidate) => candidate.picked !== "NotPicked"
              );

            return (
              <li key={`${section.name}:${election.name}`}>
                <h4>{election.name}</h4>
                <ul className="candidates">
                  {hasPref ? (
                    election.candidates.map((candidate) => {
                      return showAll || candidate.picked !== "NotPicked" ? (
                        <li
                          key={`${section.name}:${election.name}:${candidate.name}`}
                        >
                          <div
                            className={`candidate party-${candidate.party.toLowerCase()}`}
                          >
                            {showChecks ? (
                              <FormCheck
                                type="checkbox"
                                id={`${election.name}:${candidate.name}`}
                                name={`${passFieldName}.elections.${election.name}.${candidate.name}`}
                                label={candidate.name}
                                value={candidate.name}
                              />
                            ) : (
                              <span class="label">{candidate.name}</span>
                            )}
                          </div>
                        </li>
                      ) : null;
                    })
                  ) : (
                    <li>
                      <h6 style={{ fontSize: "1.25rem" }}>No Preference</h6>
                    </li>
                  )}
                  {showAll ? (
                    <li>
                      <div className={`candidate party-`}>
                        <Form.Control
                          name={`${passFieldName}.elections.${election.name}.WRITE_IN`}
                          placeholder="Write In Candidate"
                        />
                      </div>
                    </li>
                  ) : null}
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
              <BallotBlock
                section={subSection}
                showAll={showAll}
                showChecks={showChecks}
                fieldName={`${passFieldName}.demarcations.${demarcationKey}`}
              />
            </ul>
          ))}
        </li>
      ))}
    </>
  );
};
