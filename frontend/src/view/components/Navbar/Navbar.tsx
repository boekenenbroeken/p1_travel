import { createStyles, Grid } from '@mantine/core';
import { Link } from 'react-router-dom';
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

export const Navbar = () => {
    const { classes } = useStyles();

    return (
        <Grid className={classes.navbarContainer}>
            <Grid.Col span={GRID.halfColumn}>
                <Link to="/">
                    <img src="/images/ET-logo.png" alt="Events travel logo" />
                </Link>
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
