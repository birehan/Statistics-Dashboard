import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const SidebarCard = () => {
  return (
    <Card className="mt-6 w-full" style={{ border: "2px solid green" }}>
      <CardBody className="flex flex-row-reverse">
        <img
          className="relative h-28 flex-2"
          src="/assets/images/chef.jpg"
          alt="card-image"
        />
        <div className="flex-2">
          <Typography>
            Please, organize your menus through button below!
          </Typography>
          <Button>Add Menus</Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default SidebarCard;
