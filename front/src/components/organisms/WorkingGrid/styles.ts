import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  root: {
    border: 0,
    maxHeight: 670,
    maxWidth: 980,
    '& .list-view-theme--header': {
      backgroundColor: '#2999AB',
      color: '#fff',
    },
    '& .MuiDataGrid-iconSeparator': {
      display: 'none',
    },
    '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
      borderRight: '1px solid rgba(224, 224, 224, 1)'
    },
    '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
      borderBottom: '1px solid rgba(224, 224, 224, 1)',
    },
    '& .MuiDataGrid-cell': {
      display: 'flex',
      alignItems: 'center'
    },
    '& .MuiDataGrid-row:nth-child(odd)': {
      backgroundColor: '#E5F6F9'
    },
    '& .MuiDataGrid-row:hover': {
      backgroundColor: '#BFC4DB'
    }
  },
});