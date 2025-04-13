import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const Notes = ({ notes, deleteHandler }) => {
    return (  
        <List>
            {[...notes].reverse().map((value, index) => <div key={index}>
                    <ListItem
                    secondaryAction={
                        <IconButton edge="end" aria-label="delete" onClick={() => deleteHandler(value.id)}>
                        <DeleteIcon />
                        </IconButton>
                    }
                    >
                    <ListItemAvatar>
                        <Avatar>
                            {notes.length-index}
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        secondary={value.content}
                        secondaryTypographyProps={{
                            style: { fontSize: '1.2rem', textAlign: 'justify' } // Customize the font size here
                        }}
                    />
                    </ListItem>
            </div>)}
        </List>
    )
}

export default Notes