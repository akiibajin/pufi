import { SvgIconComponent } from "@mui/icons-material";
import {  IconButton, Typography } from "@mui/material";
import "../../styles/components/global/icontext.scss"
export interface IProps{
    Icon:SvgIconComponent,
    content:string,
    buttonClass?:string,
    isDivider?:boolean
}

export default function IconTextButton({Icon, content, buttonClass, isDivider}:IProps){
    return(
        <div className={buttonClass}>
        <IconButton>
            <Icon />
            <Typography>
                {content}
            </Typography>
        </IconButton>
        </div>
    )
}