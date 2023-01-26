import { TextField, Box, Stack, Button, Card } from "@mui/material";

export default function UserAdd() {
  return (
    <div className="userAddContainer">
      <Card className="userAddCard">
        <div className="userAddTitle">
          <h1>Register</h1>
          <p>Create your account. It's free and only takes a minute.</p>
        </div>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "26ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField required id="outlined-required" label="First Name" />
          <TextField required id="outlined-required" label="Last Name" />
        </Box>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 2, width: "54ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField required id="outlined-required" label="Email" />
            <TextField
              required
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
            <TextField
              required
              id="outlined-password-input"
              label="Confirm Password"
              type="password"
              autoComplete="current-password"
            />
          </div>
        </Box>
        <Stack className="conteainedButton" direction="row" spacing={0}>
          <Button variant="contained" size="large">
            Crear
          </Button>
        </Stack>
      </Card>
    </div>
  );
}
