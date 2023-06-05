import { Button as ButtonUI, createStyles } from '@mantine/core';

const useStyles = createStyles((_theme) => ({
    root: {
        width: '200px',
    },
}));

interface Props {
    onClick: () => void;
    isLoading: boolean;
    children: React.ReactNode;
}

export const Button = ({ onClick, isLoading, children }: Props) => {
    const { classes } = useStyles();

    return (
        <ButtonUI
            data-testid="button"
            className={classes.root}
            loading={isLoading}
            loaderProps={{ variant: 'dots' }}
            onClick={onClick}
        >
            {!isLoading && children}
        </ButtonUI>
    );
};
