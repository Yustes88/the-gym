import {DashboardLayoutProps} from "@/components/layout/types";
import {Container} from "@mantine/core";
import {useStyles} from "./styles";
import { HeaderResponsive } from "../Header";
import { HeaderItems } from "@/data/data";

export function MainLayout(props: DashboardLayoutProps) {
    const {classes} = useStyles();

    return (
        <div className={classes.MainLayout}>
            <HeaderResponsive links={HeaderItems}/>
                {props.children}
        </div>
    );
}
