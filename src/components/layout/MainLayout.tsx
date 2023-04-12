import {DashboardLayoutProps} from "@/components/layout/types";
import {useStyles} from "./styles";

export function MainLayout(props: DashboardLayoutProps) {
    const {classes} = useStyles();

    return (
        <div className={classes.MainLayout}>
                {props.children}
        </div>
    );
}
