import Button from './button'

const Menu = props => (
  <div className="flex flex-col md:flex-row my-4">
    {props.buttons.map(button => (
      <Button
        key={button.path}
        path={button.path}
        iconStyle={button.iconStyle}
        iconName={button.iconName}
        label={button.label}
      />
    ))}
  </div>
);

export default Menu;
