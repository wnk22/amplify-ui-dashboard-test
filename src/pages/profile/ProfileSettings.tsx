import React from "react";
import { Text, SwitchField } from "@aws-amplify/ui-react";

const ProfileSettings = () => {
  return (
    <div className="profile-card-content">
      <Text fontWeight="600" fontSize="18px" marginBottom="14px">
        Profile Settings
      </Text>

      <SwitchField
        isDisabled={false}
        label="Email me when someone follows me"
        labelPosition="end"
        defaultChecked={false}
      />

      <SwitchField
        isDisabled={false}
        label="Email me when someone mentions me"
        labelPosition="end"
        defaultChecked={true}
      />

      <SwitchField
        isDisabled={false}
        label="Subscribe to newsletter"
        labelPosition="end"
        defaultChecked={false}
      />
    </div>
  );
};

export default ProfileSettings;
