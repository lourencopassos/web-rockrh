import { Card, CardHeader, Typography } from "@material-ui/core";

export default function FeedbackCard() {

  return (
    <Card>
      <CardHeader title="Parabéns pela meta batida" />
      <div>
        <div>
          <Typography gutterBottom paragraph variant="body1">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </Typography>
        </div>
      </div>
    </Card>
  );
}
