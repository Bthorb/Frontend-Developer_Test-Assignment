import * as React from "react";
import Sidebar from "./Sidebar.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ViewListOutlinedIcon from "@mui/icons-material/ViewListOutlined";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ics from "./img/ics.png";
import DashBoard from "../Components/DashBoard"


const drawerWidth = 90;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar sx={{ display: "flex" }} />

      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label=""
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}

        <Drawer
          className="sidebar"
          variant="persistent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          <div className="img">
            <img
              src={ics}
              style={{
                width: "53px",
                height: "53px",
              }}
            ></img>
          </div>
          <div className="img">
            <Box className="logo">
              <FormatListBulletedIcon />
            </Box>
            Place
          </div>
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Typography paragraph>  <DashBoard/></Typography>
        <Typography paragraph></Typography>
      </Box>
    </Box>
  );
}
