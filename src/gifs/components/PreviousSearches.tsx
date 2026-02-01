interface Props {
  title: string;
  searches: string[];
  onLabelCliked: (term: string) => void;
}

export const PreviousSearches = ({ title, searches, onLabelCliked }: Props) => {
  return (
    <div className="previous-searches">
      <h2>{title}</h2>
      <ul className="previous-searches-list">
        {searches.map((term) => (
          <li key={term} onClick={() => onLabelCliked(term)}>
            {term}
          </li>
        ))}
      </ul>
    </div>
  );
};
