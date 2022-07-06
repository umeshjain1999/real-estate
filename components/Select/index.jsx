import OptionUnstyled, {
  optionUnstyledClasses
} from "@mui/base/OptionUnstyled";
import PopperUnstyled from "@mui/base/PopperUnstyled";
import SelectUnstyled, {
  selectUnstyledClasses
} from "@mui/base/SelectUnstyled";
import { styled } from "@mui/system";
import * as React from "react";
import theme from '@constants/theme.json'

const StyledButton = styled("button")(
  () => `
  font-size: 1.6rem;
  box-sizing: border-box;
  min-height: 4.4rem;
  width: 100%;
  background: ${theme.colors['white-clr']};
  border: none;
  border-radius: 12px;
  padding: 10px;
  text-align: left;
  line-height: 1.5;
  color: ${theme.colors['text-clr-primary']};

  &:hover {
    background: ${theme.colors['accent-clr-1']};
    color : ${theme.colors['text-clr-sec']}
  }

  &.${selectUnstyledClasses.focusVisible} {
    outline: 3px solid ${theme.colors['accent-clr-1-light']};
  }

  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: '▴';
    }
  }

  &::after {
    content: '▾';
    float: right;
  }
  `
);

const StyledListbox = styled("ul")(
  () => `
  font-size: 1.7rem;
  box-sizing: border-box;
  padding: 5px;
  margin: 10px 0;
  width:100%;
  background: ${theme.colors['white-clr']};
  border: 1px solid ${theme.colors['grey']};
  border-radius: 12px;
  color: ${theme.colors['text-clr-primary']};
  overflow: auto;
  outline: 0px;
  `
);

const StyledOption = styled(OptionUnstyled)(
  () => `
  list-style: none;
  padding: 8px;
  border-radius: 12px;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.selected} {
    background-color: ${theme.colors['grey']};
    color: ${theme.colors['text-clr-primary']};
  }

  &.${optionUnstyledClasses.highlighted} {
    background-color: ${theme.colors['grey']};
    color: ${theme.colors['text-clr-primary']};
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: ${theme.colors['accent-clr-1']};
    color: ${theme.colors['text-clr-sec']};
  }

  &.${optionUnstyledClasses.disabled} {
    color: ${theme.colors['placeholder']};
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: ${theme.colors['grey']};
    color: ${theme.colors['text-clr-primary']};
  }
  `
);

const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
`;


function CustomSelect(props) {
  const components = {
    Root: StyledButton,
    Listbox: StyledListbox,
    Popper: StyledPopper,
    ...props.components
  };

  return <SelectUnstyled {...props} components={components} />;
}

export default function Select({selectOptions = [],title='none'}) {
  const [character, setCharacter] = React.useState('');
  const onOptionSelected = (selected) => {
    setCharacter(selected);
  }
  return (
    <div className="select-res" style={{position: 'relative'}}>
      <CustomSelect value={character} onChange={onOptionSelected}
       renderValue={(selected) => {
        if (selected?.label?.length === 0) {
          return title;
        }
        return selected?.label;
      }}
      >
        <StyledOption disabled value=''>
          {title}
        </StyledOption>
        {selectOptions.map((c) => (
          <StyledOption key={c.name} value={c}>
            {c.name}
          </StyledOption>
        ))}
      </CustomSelect>
      {character?.length !== 0 ? <p className="select-title" style ={{
        fontSize : '1.2rem',
        opacity: '0.6',
        margin: '0.3rem 0'
      }}>{title}</p> : ''}
    </div>
  );
}
