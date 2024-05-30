import Table from '../components/Table'
import { useState } from "react";
import { Box, Button} from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import axios from "axios";
function API() {
  const [userList, setUserList] = useState<any>([]);
  const [loader,setLoader]=useState(false);
  const getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setLoader(true);
        console.log(res.data[0], "data received");
        setUserList(res.data);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err, "Error");
        setLoader(false);
      });
  };

  
  return (
    <Box>
      <h1>API HANDLING</h1>
      <Button
        onClick={getData}
        sx={{ margin: 1, textTransform: "capitalize" }}
        endIcon={<PublicIcon />}
        variant="contained"
      >
        Get DATA
      </Button>
      <br />
      <Button
        sx={{ margin: 1, textTransform: "capitalize" }}
        endIcon={<PublicIcon />}
        variant="contained"
      >
        Post DATA
      </Button>
      <br />
      <Button
        sx={{ margin: 1, textTransform: "capitalize" }}
        endIcon={<PublicIcon />}
        variant="contained"
      >
        Put DATA
      </Button>
      <br />
      <Button
        sx={{ margin: 1, textTransform: "capitalize" }}
        endIcon={<PublicIcon />}
        variant="contained"
      >
        Delete DATA
      </Button>
 <Table loading={loader}
                gridCols={[
                    {
                        key: 'name',
                        label: 'User Name'
                    },
                    {
                        key: 'email',
                        label: 'User Email'
                    },
                    {
                        key: 'phone',
                        label: 'Phone'
                    },
                    {
                        key: 'website',
                        label: 'Web URL'
                    },
                    {
                        key: '',
                        label: 'Delete',
                        displayField: (row: any) => <Button onClick={() => {
                            console.log(row)
                        }} variant="contained">Delete</Button>
                    },
                ]} datasource={userList} />
    </Box>
  );
}
export default API;