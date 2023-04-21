import {LayoutProps} from "@/components/layout/types";
import {useStyles} from "./styles";

export function MainLayout(props: LayoutProps) {
    const {classes} = useStyles();

    return (
        <div className={classes.MainLayout}>
                {props.children}
        </div>
    );
}
