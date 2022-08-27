import React, { useState } from "react";
import { View, Button, StyleSheet, SafeAreaView } from "react-native";
import { TextInput } from "react-native-paper";
import DropDown from "react-native-paper-dropdown";
import { Field, reduxForm } from "redux-form";

const FormComponent = (props) => {
  const { handleSubmit } = props;

  const onSubmit = (values) => console.log(values);

  const renderInput = ({ input: { onChange, ...input }, ...rest }) => {
    return (
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        {...input}
        {...rest}
      />
    );
  };

  const renderSelect = ({ input: { onChange, ...input }, ...rest }) => {
    const [showDropDown, setShowDropDown] = useState(false);
    return (
      <SafeAreaView style={{ width: 300, marginBottom: 12 }}>
        <DropDown
          mode={"outlined"}
          style={styles.select}
          visible={showDropDown}
          showDropDown={() => setShowDropDown(true)}
          onDismiss={() => setShowDropDown(false)}
          setValue={onChange}
          {...input}
          {...rest}
        />
      </SafeAreaView>
    );
  };

  const list = [{ label: "lira", value: 4 }];

  return (
    <View style={styles.root}>
      <Field
        name={"email"}
        props={{
          label: "Email",
          placeholder: "entry the value",
          mode: "outlined",
        }}
        component={renderInput}
      />
      <Field
        name={"password"}
        props={{
          label: "Password",
          secureTextEntry: true,
          placeholder: "entry the value",
          mode: "outlined",
        }}
        component={renderInput}
      />
      <Field
        name={"Siège social"}
        props={{
          label: "Siège",
          list: list,
        }}
        component={renderSelect}
      />
      <Button title={"Submit"} onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 32,
    justifyContent: "center",
  },
  input: {
    marginBottom: 8,
    borderColor: "blue",
    borderRadius: 4,
    width: 300,
  },
});

export default reduxForm({ form: "test-form" })(FormComponent);
