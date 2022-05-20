import { SvgIconComponent } from "@mui/icons-material";
import { Divider, IconButton, Typography } from "@mui/material";
import "../../styles/components/layout.scss"
export interface IProps{
    Icon:SvgIconComponent,
    content:string,
    buttonClass?:string,
    isDivider?:boolean
}

export default function IconTextButton({Icon, content, buttonClass, isDivider}:IProps){
    return(
        <>
        <IconButton id={buttonClass}>
            <Icon />
            <Typography>
                {content}
            </Typography>
        </IconButton>
        {isDivider && <Divider orientation="vertical" flexItem  variant="middle"/>}
        </>
    )
}