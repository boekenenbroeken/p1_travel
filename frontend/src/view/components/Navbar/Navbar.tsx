import { createStyles, Grid } from '@mantine/core';
import { ChildlessBaseComponent } from '../../../app/interfaces/BaseComponent';
import classNames from 'classnames';
import { NavLink } from './NavLink';
import { colors } from '../../../app/constants/colors';
import { ROUTES } from '../../../app/constants/routes';
import { GRID } from '../../../app/constants/grid';

const useStyles = createStyles((theme) => ({
    navbarContainer: {
        backgroundColor: colors.blue,
        paddingRight: theme.spacing.lg,
        paddingLeft: theme.spacing.lg,
        alignItems: 'center',
        marginBottom: 40,
    },
    linksContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        flexShrink: 0,
    },
}));

export const Navbar = ({ className }: ChildlessBaseComponent) => {
    const { classes } = useStyles();

    return (
        <Grid className={classNames(className, classes.navbarContainer)}>
            <Grid.Col span={GRID.halfColumn}>
                <img src="/images/ET-logo.png" alt="Events travel logo" />
            </Grid.Col>
            <Grid.Col span={GRID.halfColumn} className={classes.linksContainer}>
                {ROUTES.map(({ path, name }) => (
                    <NavLink key={path} to={path}>
                        {name}
                    </NavLink>
                ))}
            </Grid.Col>
        </Grid>
    );
};
