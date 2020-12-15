import Button from './button'

const Menu = props => (
  <div className="flex flex-col md:flex-row mb-8 md:mb-12">
    {props.buttons.map(button => (
      <Button
        key={button.path}
        path={button.path}
        iconStyle={button.iconStyle}
        iconName={button.iconName}
        label={button.label}
        text={button.text}
      />
    ))}
  </div>
);

export default Menu;
