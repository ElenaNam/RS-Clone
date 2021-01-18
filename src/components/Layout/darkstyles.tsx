const darkstyles = `
    html {
        background-color: #181a1b !important;
    }
    html,
    body,
    input,
    textarea,
    select,
    button {
        background-color: #181a1b;
    }
    html,
    body,
    input,
    textarea,
    select,
    button {
        border-color: #736b5e;
        color: #e8e6e3;
    }
    a {
        color: #3391ff;
    }
    table {
        border-color: #545b5e;
    }
    ::placeholder {
        color: #b2aba1;
    }
    input:-webkit-autofill,
    textarea:-webkit-autofill,
    select:-webkit-autofill {
        background-color: #555b00 !important;
        color: #e8e6e3 !important;
    }
    ::-webkit-scrollbar {
        background-color: #202324;
        color: #aba499;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #454a4d;
    }
    ::-webkit-scrollbar-thumb:hover {
        background-color: #575e62;
    }
    ::-webkit-scrollbar-thumb:active {
        background-color: #484e51;
    }
    ::-webkit-scrollbar-corner {
        background-color: #181a1b;
    }
    * {
        scrollbar-color: #202324 #454a4d;
    }
    ::selection {
        background-color: #004daa !important;
        color: #e8e6e3 !important;
    }
    ::-moz-selection {
        background-color: #004daa !important;
        color: #e8e6e3 !important;
    }
    
    /* Text Style */
    *:not(pre) {
        -webkit-text-stroke: 0.2px !important;
        text-stroke: 0.2px !important;
    }
    
    /* Invert Style */
    .jfk-bubble.gtx-bubble,
    .captcheck_answer_label > input + img,
    embed[type='application/pdf'] {
        filter: invert(100%) hue-rotate(180deg) contrast(90%) !important;
    }
    
    /* Variables Style */
    :root {
        --darkreader-neutral-background: #131516;
        --darkreader-neutral-text: #d8d4cf;
        --darkreader-selection-background: #004daa;
        --darkreader-selection-text: #e8e6e3;
    }
    
    /* Modified CSS */
    .App-link {
        color: rgb(95, 217, 251);
    }
    .MuiPaper-root {
        color: rgba(232, 230, 227, 0.87);
        background-color: rgb(24, 26, 27);
    }
    .MuiPaper-outlined {
        border-color: rgba(140, 130, 115, 0.12);
    }
    .MuiPaper-elevation0 {
        box-shadow: none;
    }
    .MuiPaper-elevation1 {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
        rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
    }
    .MuiPaper-elevation2 {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
        rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
    }
    .MuiPaper-elevation3 {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px,
        rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
    }
    .MuiPaper-elevation4 {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,
        rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
    }
    .MuiPaper-elevation5 {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px,
        rgba(0, 0, 0, 0.14) 0px 5px 8px 0px, rgba(0, 0, 0, 0.12) 0px 1px 14px 0px;
    }
    .MuiPaper-elevation6 {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px,
        rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px;
    }
    .MuiPaper-elevation7 {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 5px -2px,
        rgba(0, 0, 0, 0.14) 0px 7px 10px 1px, rgba(0, 0, 0, 0.12) 0px 2px 16px 1px;
    }
    .MuiPaper-elevation8 {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px,
        rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px;
    }
    .MuiPaper-elevation9 {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 6px -3px,
        rgba(0, 0, 0, 0.14) 0px 9px 12px 1px, rgba(0, 0, 0, 0.12) 0px 3px 16px 2px;
    }
    .MuiPaper-elevation10 {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 6px -3px,
        rgba(0, 0, 0, 0.14) 0px 10px 14px 1px, rgba(0, 0, 0, 0.12) 0px 4px 18px 3px;
    }
    .MuiPaper-elevation11 {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 7px -4px,
        rgba(0, 0, 0, 0.14) 0px 11px 15px 1px, rgba(0, 0, 0, 0.12) 0px 4px 20px 3px;
    }
    .MuiPaper-elevation12 {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 8px -4px,
        rgba(0, 0, 0, 0.14) 0px 12px 17px 2px, rgba(0, 0, 0, 0.12) 0px 5px 22px 4px;
    }
    .MuiPaper-elevation13 {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 8px -4px,
        rgba(0, 0, 0, 0.14) 0px 13px 19px 2px, rgba(0, 0, 0, 0.12) 0px 5px 24px 4px;
    }
    .MuiPaper-elevation14 {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 9px -4px,
        rgba(0, 0, 0, 0.14) 0px 14px 21px 2px, rgba(0, 0, 0, 0.12) 0px 5px 26px 4px;
    }
    .MuiPaper-elevation15 {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 9px -5px,
        rgba(0, 0, 0, 0.14) 0px 15px 22px 2px, rgba(0, 0, 0, 0.12) 0px 6px 28px 5px;
    }
    .MuiPaper-elevation16 {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 10px -5px,
        rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, rgba(0, 0, 0, 0.12) 0px 6px 30px 5px;
    }
    .MuiPaper-elevation17 {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 11px -5px,
        rgba(0, 0, 0, 0.14) 0px 17px 26px 2px, rgba(0, 0, 0, 0.12) 0px 6px 32px 5px;
    }
    .MuiPaper-elevation18 {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 9px 11px -5px,
        rgba(0, 0, 0, 0.14) 0px 18px 28px 2px, rgba(0, 0, 0, 0.12) 0px 7px 34px 6px;
    }
    .MuiPaper-elevation19 {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 9px 12px -6px,
        rgba(0, 0, 0, 0.14) 0px 19px 29px 2px, rgba(0, 0, 0, 0.12) 0px 7px 36px 6px;
    }
    .MuiPaper-elevation20 {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 13px -6px,
        rgba(0, 0, 0, 0.14) 0px 20px 31px 3px, rgba(0, 0, 0, 0.12) 0px 8px 38px 7px;
    }
    .MuiPaper-elevation21 {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 13px -6px,
        rgba(0, 0, 0, 0.14) 0px 21px 33px 3px, rgba(0, 0, 0, 0.12) 0px 8px 40px 7px;
    }
    .MuiPaper-elevation22 {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 14px -6px,
        rgba(0, 0, 0, 0.14) 0px 22px 35px 3px, rgba(0, 0, 0, 0.12) 0px 8px 42px 7px;
    }
    .MuiPaper-elevation23 {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 11px 14px -7px,
        rgba(0, 0, 0, 0.14) 0px 23px 36px 3px, rgba(0, 0, 0, 0.12) 0px 9px 44px 8px;
    }
    .MuiPaper-elevation24 {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 11px 15px -7px,
        rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px;
    }
    .MuiDrawer-paper {
        outline-color: initial;
    }
    .MuiDrawer-paperAnchorDockedLeft {
        border-right-color: rgba(140, 130, 115, 0.12);
    }
    .MuiDrawer-paperAnchorDockedTop {
        border-bottom-color: rgba(140, 130, 115, 0.12);
    }
    .MuiDrawer-paperAnchorDockedRight {
        border-left-color: rgba(140, 130, 115, 0.12);
    }
    .MuiDrawer-paperAnchorDockedBottom {
        border-top-color: rgba(140, 130, 115, 0.12);
    }
    body {
        color: rgba(232, 230, 227, 0.87);
        background-color: rgb(27, 29, 30);
    }
    body::backdrop {
        background-color: rgb(27, 29, 30);
    }
    .MuiAppBar-colorDefault {
        color: rgba(232, 230, 227, 0.87);
        background-color: rgb(30, 32, 33);
    }
    .MuiAppBar-colorPrimary {
        color: rgb(232, 230, 227);
        background-color: rgb(50, 65, 145);
    }
    .MuiAppBar-colorSecondary {
        color: rgb(232, 230, 227);
        background-color: rgb(196, 0, 70);
    }
    .MuiAppBar-colorInherit {
        color: inherit;
    }
    .MuiAppBar-colorTransparent {
        color: inherit;
        background-color: transparent;
    }
    .MuiTypography-colorInherit {
        color: inherit;
    }
    .MuiTypography-colorPrimary {
        color: rgb(109, 149, 204);
    }
    .MuiTypography-colorSecondary {
        color: rgb(255, 33, 112);
    }
    .MuiTypography-colorTextPrimary {
        color: rgba(232, 230, 227, 0.87);
    }
    .MuiTypography-colorTextSecondary {
        color: rgba(232, 230, 227, 0.54);
    }
    .MuiTypography-colorError {
        color: rgb(245, 78, 66);
    }
    .MuiDivider-root {
        border-color: initial;
        background-color: rgba(0, 0, 0, 0.12);
    }
    .MuiDivider-light {
        background-color: rgba(0, 0, 0, 0.08);
    }
    .MuiTouchRipple-child {
        background-color: currentcolor;
    }
    .MuiButtonBase-root {
        color: inherit;
        border-color: initial;
        outline-color: initial;
        text-decoration-color: initial;
        background-color: transparent;
        -webkit-tap-highlight-color: transparent;
    }
    .MuiIconButton-root {
        color: rgba(232, 230, 227, 0.54);
    }
    .MuiIconButton-root:hover {
        background-color: rgba(0, 0, 0, 0.04);
    }
    .MuiIconButton-root.Mui-disabled {
        color: rgba(232, 230, 227, 0.26);
        background-color: transparent;
    }
    @media (hover: none) {
        .MuiIconButton-root:hover {
        background-color: transparent;
        }
    }
    .MuiIconButton-colorInherit {
        color: inherit;
    }
    .MuiIconButton-colorPrimary {
        color: rgb(109, 149, 204);
    }
    .MuiIconButton-colorPrimary:hover {
        background-color: rgba(50, 65, 145, 0.04);
    }
    @media (hover: none) {
        .MuiIconButton-colorPrimary:hover {
        background-color: transparent;
        }
    }
    .MuiIconButton-colorSecondary {
        color: rgb(255, 33, 112);
    }
    .MuiIconButton-colorSecondary:hover {
        background-color: rgba(196, 0, 70, 0.04);
    }
    @media (hover: none) {
        .MuiIconButton-colorSecondary:hover {
        background-color: transparent;
        }
    }
    .MuiSvgIcon-root {
        fill: currentcolor;
    }
    .MuiSvgIcon-colorPrimary {
        color: rgb(109, 149, 204);
    }
    .MuiSvgIcon-colorSecondary {
        color: rgb(255, 33, 112);
    }
    .MuiSvgIcon-colorAction {
        color: rgba(232, 230, 227, 0.54);
    }
    .MuiSvgIcon-colorError {
        color: rgb(245, 78, 66);
    }
    .MuiSvgIcon-colorDisabled {
        color: rgba(232, 230, 227, 0.26);
    }
    .MuiButton-root {
        color: rgba(232, 230, 227, 0.87);
    }
    .MuiButton-root:hover {
        text-decoration-color: initial;
        background-color: rgba(0, 0, 0, 0.04);
    }
    .MuiButton-root.Mui-disabled {
        color: rgba(232, 230, 227, 0.26);
    }
    @media (hover: none) {
        .MuiButton-root:hover {
        background-color: transparent;
        }
    }
    .MuiButton-root:hover.Mui-disabled {
        background-color: transparent;
    }
    .MuiButton-textPrimary {
        color: rgb(109, 149, 204);
    }
    .MuiButton-textPrimary:hover {
        background-color: rgba(50, 65, 145, 0.04);
    }
    @media (hover: none) {
        .MuiButton-textPrimary:hover {
        background-color: transparent;
        }
    }
    .MuiButton-textSecondary {
        color: rgb(255, 33, 112);
    }
    .MuiButton-textSecondary:hover {
        background-color: rgba(196, 0, 70, 0.04);
    }
    @media (hover: none) {
        .MuiButton-textSecondary:hover {
        background-color: transparent;
        }
    }
    .MuiButton-outlined {
        border-color: rgba(140, 130, 115, 0.23);
    }
    .MuiButton-outlined.Mui-disabled {
        border-color: rgba(140, 130, 115, 0.12);
    }
    .MuiButton-outlinedPrimary {
        color: rgb(109, 149, 204);
        border-color: rgba(47, 60, 135, 0.5);
    }
    .MuiButton-outlinedPrimary:hover {
        border-color: rgb(47, 60, 135);
        background-color: rgba(50, 65, 145, 0.04);
    }
    @media (hover: none) {
        .MuiButton-outlinedPrimary:hover {
        background-color: transparent;
        }
    }
    .MuiButton-outlinedSecondary {
        color: rgb(255, 33, 112);
        border-color: rgba(182, 0, 64, 0.5);
    }
    .MuiButton-outlinedSecondary:hover {
        border-color: rgb(182, 0, 64);
        background-color: rgba(196, 0, 70, 0.04);
    }
    .MuiButton-outlinedSecondary.Mui-disabled {
        border-color: rgba(140, 130, 115, 0.26);
    }
    @media (hover: none) {
        .MuiButton-outlinedSecondary:hover {
        background-color: transparent;
        }
    }
    .MuiButton-contained {
        color: rgba(232, 230, 227, 0.87);
        box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
        rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
        background-color: rgb(42, 45, 47);
    }
    .MuiButton-contained:hover {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,
        rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
        background-color: rgb(48, 52, 54);
    }
    .MuiButton-contained.Mui-focusVisible {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px,
        rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px;
    }
    .MuiButton-contained:active {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px,
        rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px;
    }
    .MuiButton-contained.Mui-disabled {
        color: rgba(232, 230, 227, 0.26);
        box-shadow: none;
        background-color: rgba(0, 0, 0, 0.12);
    }
    @media (hover: none) {
        .MuiButton-contained:hover {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
            rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
        background-color: rgb(42, 45, 47);
        }
    }
    .MuiButton-contained:hover.Mui-disabled {
        background-color: rgba(0, 0, 0, 0.12);
    }
    .MuiButton-containedPrimary {
        color: rgb(232, 230, 227);
        background-color: rgb(50, 65, 145);
    }
    .MuiButton-containedPrimary:hover {
        background-color: rgb(38, 50, 127);
    }
    @media (hover: none) {
        .MuiButton-containedPrimary:hover {
        background-color: rgb(50, 65, 145);
        }
    }
    .MuiButton-containedSecondary {
        color: rgb(232, 230, 227);
        background-color: rgb(196, 0, 70);
    }
    .MuiButton-containedSecondary:hover {
        background-color: rgb(158, 14, 78);
    }
    @media (hover: none) {
        .MuiButton-containedSecondary:hover {
        background-color: rgb(196, 0, 70);
        }
    }
    .MuiButton-disableElevation {
        box-shadow: none;
    }
    .MuiButton-disableElevation:hover {
        box-shadow: none;
    }
    .MuiButton-disableElevation.Mui-focusVisible {
        box-shadow: none;
    }
    .MuiButton-disableElevation:active {
        box-shadow: none;
    }
    .MuiButton-disableElevation.Mui-disabled {
        box-shadow: none;
    }
    .MuiButton-colorInherit {
        color: inherit;
        border-color: currentcolor;
    }
    .MuiFormControlLabel-root {
        -webkit-tap-highlight-color: transparent;
    }
    .MuiFormControlLabel-label.Mui-disabled {
        color: rgba(232, 230, 227, 0.38);
    }
    .MuiList-root {
        list-style-image: initial;
    }
    .MuiListItem-root {
        text-decoration-color: initial;
    }
    .MuiListItem-root.Mui-focusVisible {
        background-color: rgba(0, 0, 0, 0.08);
    }
    .MuiListItem-root.Mui-selected,
    .MuiListItem-root.Mui-selected:hover {
        background-color: rgba(0, 0, 0, 0.08);
    }
    .MuiListItem-divider {
        border-bottom-color: rgba(140, 130, 115, 0.12);
    }
    .MuiListItem-button:hover {
        text-decoration-color: initial;
        background-color: rgba(0, 0, 0, 0.04);
    }
    @media (hover: none) {
        .MuiListItem-button:hover {
        background-color: transparent;
        }
    }
    .MuiListItemIcon-root {
        color: rgba(232, 230, 227, 0.54);
    }
    .MuiSwitch-switchBase {
        color: rgb(229, 227, 223);
    }
    .MuiSwitch-switchBase.Mui-disabled {
        color: rgb(190, 185, 176);
    }
    .MuiSwitch-colorPrimary.Mui-checked {
        color: rgb(109, 149, 204);
    }
    .MuiSwitch-colorPrimary.Mui-disabled {
        color: rgb(190, 185, 176);
    }
    .MuiSwitch-colorPrimary.Mui-checked + .MuiSwitch-track {
        background-color: rgb(50, 65, 145);
    }
    .MuiSwitch-colorPrimary.Mui-disabled + .MuiSwitch-track {
        background-color: rgb(0, 0, 0);
    }
    .MuiSwitch-colorPrimary.Mui-checked:hover {
        background-color: rgba(50, 65, 145, 0.04);
    }
    @media (hover: none) {
        .MuiSwitch-colorPrimary.Mui-checked:hover {
        background-color: transparent;
        }
    }
    .MuiSwitch-colorSecondary.Mui-checked {
        color: rgb(255, 33, 112);
    }
    .MuiSwitch-colorSecondary.Mui-disabled {
        color: rgb(190, 185, 176);
    }
    .MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track {
        background-color: rgb(196, 0, 70);
    }
    .MuiSwitch-colorSecondary.Mui-disabled + .MuiSwitch-track {
        background-color: rgb(0, 0, 0);
    }
    .MuiSwitch-colorSecondary.Mui-checked:hover {
        background-color: rgba(196, 0, 70, 0.04);
    }
    @media (hover: none) {
        .MuiSwitch-colorSecondary.Mui-checked:hover {
        background-color: transparent;
        }
    }
    .MuiSwitch-thumb {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
        rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
        background-color: currentcolor;
    }
    .MuiSwitch-track {
        background-color: rgb(0, 0, 0);
    }
    .makeStyles-toolBar-4 {
        background-color: rgb(204, 132, 0);
    }
    .makeStyles-drawerHeader-9 {
        background-color: rgb(96, 104, 108);
    }
    .makeStyles-content-10 {
        background-color: rgb(96, 104, 108);
    }
    
    /* Override Style */
    .vimvixen-hint {
        background-color: #7b5300 !important;
        border-color: #d8b013 !important;
        color: #f3e8c8 !important;
    }
    ::placeholder {
        opacity: 0.5 !important;
    }
  
`;

export default darkstyles;
