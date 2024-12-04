import React, { useEffect, useState } from "react";
import { SideMenu } from "../../components";
import "./index.css";
import { Button } from "@mui/material";
import { Edit } from "../../svg";
import { useAuth } from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useCloudinary } from "../../hooks/UseCloudinary";
const Settings = () => {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [email, setEmail] = useState("johndoe@email.com");
  const [phone, setPhone] = useState('+1 255 658 4899');
  const [address, setAddress] = useState(
    "2885 old Zion, Cemetery Rd, Loganville, Ga 3052"
  );

  const [profilePic, setProfilePic] = useState("");
  const [bio, setBio] = useState("Team Manager");
  const [isLoading, setIsLoading] = useState(false);

  const { user, updateProfile, setUser } = useAuth()
  const { UploadSingleImage } = useCloudinary()

  useEffect(() => {

    if (user) {
      setFirstName(user.fullName.split(" ")[0])
      setLastName(user.fullName.split(" ")[1])
      setEmail(user.email)
      setAddress(user.address)
      setPhone(user.phone)
      setBio(user.bio)
      setProfilePic(user?.profilePicUrl || "")
    }

  }, [user])

  const onEditHandler = async () => {
    setIsLoading(true)
    try {

      let url = profilePic

      if (typeof profilePic === "object") {

        const formData = new FormData();
        formData.append('image', profilePic);
        url = await UploadSingleImage(formData)

      }

      const { data } = await updateProfile({
        fullName: firstName + " " + lastName,
        email,
        phone,
        address,
        bio,
        profilePicUrl: url
      })

      if (data.statusCode === "10000") {
        setUser(data?.data)
        toast.success("Profile Updated Sucessfully")
        setIsLoading(false)
      }

    } catch (error) {
      console.log(error, "errrrrr")
      setIsLoading(false)
      toast.error(error.response.data.message)
    }
  }

  return (
    <SideMenu title="Settings">
      <div className="settings-main">
        <div className="settings-header">
          <div className="settings-header-profile">
            <img src={typeof profilePic !== 'string' ? URL.createObjectURL(profilePic) : profilePic} />
            <label className="attachments-button">
              <input
                type="file"
                hidden
                onChange={(e) => setProfilePic(e.target.files[0])}
              />
              <img src={Edit} />
            </label>
          </div>
          <div>
            <p className="settings-user-name">{user?.fullName ?? "John Doe"} </p>
            <p className="settings-user-email">{user?.email ?? "johndoe@email.com"} </p>
          </div>
        </div>
        <div className="setting-from-header">
          <p>Personal information</p>
          <Button
            variant="contained"
            disableRipple={true}
            className="setting-edit-btn"
            disabled={isLoading}
            onClick={onEditHandler}
          >
            {isLoading ? "Editing..." : "Edit"}
          </Button>
        </div>
        <div className="setttings-from">
          <div>
            <p className="setttings-input-title">First name</p>
            <div className="setttings-input-main">
              <input
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(val) => setFirstName(val.target.value)}
              />
            </div>
          </div>
          <div>
            <p className="setttings-input-title">Last name</p>
            <div className="setttings-input-main">
              <input
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(val) => setLastName(val.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="setttings-from">
          <div>
            <p className="setttings-input-title">Email</p>
            <div className="setttings-input-main">
              <input
                type="email"
                placeholder="Email"
                disabled
                value={email}
                onChange={(val) => setEmail(val.target.value)}
              />
            </div>
          </div>
          <div>
            <p className="setttings-input-title">Phone number</p>
            <div className="setttings-input-main">
              <input
                type="text"
                placeholder="Phone number"
                value={phone}
                onChange={(val) => setPhone(val.target.value)}
              />
            </div>
          </div>
        </div>
        <p className="setttings-input-title">Address</p>
        <div className="setttings-input-main">
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(val) => setAddress(val.target.value)}
          />
        </div>
        <p className="setttings-input-title">Bio</p>
        <div className="setttings-input-main">
          <input
            type="text"
            placeholder="Bio"
            value={bio}
            onChange={(val) => setBio(val.target.value)}
          />
        </div>
        {/* <Button
          variant="contained"
          disableRipple={true}
          className="setting-change-password-btn"
        >
          Change Password
        </Button> */}
      </div>
    </SideMenu>
  );
};
export default Settings;
