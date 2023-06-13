import FilePresentIcon from '@mui/icons-material/FilePresent';

export const File = ({fileData}) => {
    return(
        <div className="file">
            <FilePresentIcon />
            <span>{fileData.name}</span>
        </div>
    )
}