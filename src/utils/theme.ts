import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        background: {
            default: "#252525"
        },
        primary: {
            main: "#FFFFFF",
            contrastText: "#ffffff",
        },
        secondary: {
            main: '#FAFAFA'
        }
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
    },
    components: {
        MuiTypography: {
            defaultProps: {
                fontWeight: 600,
                color: "#ffffff",
            },
        },
        MuiSkeleton: {
            defaultProps: {
                animation: "wave",
            },
            styleOverrides: {
                root: {
                    "-webkit-transform": "scale(1)",
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    fontWeight: 500,
                    '&::placeholder': {
                        color: '#44444440',
                    },
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    "& .MuiOutlinedInput-root": {
                        fontSize: '14px',
                        fontWeight: 400,
                        color: "#44444485",
                        borderRadius: "6px",
                        "&.Mui-disabled": {
                            backgroundColor: "#180f0c",
                        },
                    },
                    '& ::placeholder': {
                        color: '',
                    },
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                root: {
                    color: "red",
                    fontWeight: 600,
                    minWidth: 223,
                },
                filled: {
                    fontWeight: 600,
                    color: "red",
                },
            },
        },
        MuiAutocomplete: {
            styleOverrides: {
                root: {
                    minWidth: 223,
                },
            },
        },
        MuiButton: {
            defaultProps: {
                variant: "outlined",
            },
            variants: [
                {
                    props: { variant: "outlined" },
                    style: {
                        borderWidth: "2px",
                        ":hover": {
                            borderWidth: "2px",
                        },
                    },
                },
                {
                    props: { variant: "contained" },
                    style: {
                        color: '#252525',
                        backgroundColor: "#FFFFFF",
                        border: 0,
                        ":hover": {
                            backgroundColor: "#F1F1F1",
                        },
                    },
                },
            ],
            styleOverrides: {
                root: {
                    fontSize: '14px',
                    fontWeight: 400,
                    borderRadius: "6px",
                    textTransform: "none",
                    padding: "8px 16px",
                },
            },
        },
        MuiPagination: {
            variants: [
                {
                    props: { variant: "text" },
                    style: {
                        color: '#ffffff',
                        '& .Mui-selected': {
                            backgroundColor: '#ffffff',
                            border: '1px solid #000',
                        },
                    },
                },
            ],
            styleOverrides: {
                root: {
                    color: '#ffffff',
                    '& .Mui-selected': {
                        backgroundColor: '#ffffff',
                        border: '1px solid #000',
                    },
                },
            },
        }
    },
});

export default theme;