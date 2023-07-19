import { sizes } from "../../utils/constants";
import "./Filter.css"
const Filter = () => {
  const renderFilterButtons = sizes.map((size) => {
    return (
      <div className="size-item">
        <input class="form-check-input" type="radio" name={size} value={size} />
        <label class="form-check-label"> <div className="circle">{size}</div></label>
      </div>
    );
  });
  return (
    <div className="size-section">
      <h4 className="display-text">Sizes:</h4>
      <div className="size-list">
      {renderFilterButtons}
      </div>
    </div>
  );
};
export default Filter;
