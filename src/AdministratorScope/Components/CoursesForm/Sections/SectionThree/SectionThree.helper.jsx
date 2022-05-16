// Components
import SelectField from "../../Components/SelectField/SelectField";
import TextField from "../../Components/TextField/TextField";

export const longPartComponent = (index, register, label) => {
  if (index >= 4) return null;
  return (
    <div key={index} className="SectionThree__container">
      <div className="SectionThree__container__title">
        <TextField
          register={register}
          required={true}
          onChange={() => {}}
          label={`Título ${index} + ${label}`}
          placeholder="Título"
          hideLabel={true}
          className="SectionThree__textField"
        />
        <SelectField
          register={register}
          required={true}
          label={`Título ${index} + ${label} + icon`}
          hideLabel={true}
          placeholder="Categoría"
          className="SectionThree__container__icon"
          width="100%"
          widthContainer="100%"
        />
      </div>
      <TextField
        register={register}
        required={true}
        onChange={() => {}}
        label={`Descripción ${index} + ${label}`}
        placeholder="Descripción"
        height="96px"
        rows="5"
        hideLabel={true}
        className="SectionThree__textField"
      />
    </div>
  );
};

export const shortPartComponent = (index, register, label) => {
  if (index >= 4) return null;
  return (
    <div key={index} className="SectionThree__container">
      <TextField
        register={register}
        required={true}
        onChange={() => {}}
        label={`Título ${index} + ${label}`}
        placeholder="Título"
        hideLabel={true}
        className="SectionThree__textField"
      />
    </div>
  );
};
