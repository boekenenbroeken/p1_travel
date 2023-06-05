import { BaseComponent } from '../../../app/interfaces/BaseComponent';
import classNames from 'classnames';
import { createStyles } from '@mantine/core';

interface Props extends BaseComponent {
    htmlFor: string;
}

const useStyles = createStyles((theme) => ({
    label: {
        fontWeight: 'bold',
        marginBottom: theme.spacing.lg,
        fontSize: '.875rem',
    },
}));

export const FormLabel = ({ children, className, htmlFor }: Props) => {
    const { classes } = useStyles();

    return (
        <label htmlFor={htmlFor} className={classNames(className, classes.label)}>
            {children}
        </label>
    );
};
