import { sizes } from "../utils/constants";
const Filter = () => {
  const renderFilterButtons = sizes.map((size) => {
    return (
      <div className="size-circle">
        <input class="form-check-input" type="radio" name={size} />
        <label class="form-check-label"> {size}</label>
      </div>
    );
  });
  return (
    <div className="sort-size">
      <h4 className="display-text">Sizes:</h4>
      {renderFilterButtons}
    </div>
  );
};
export default Filter;
