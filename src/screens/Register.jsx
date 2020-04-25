import React from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { Input } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";

// local import
import Button from "../components/Button";

const Register = ({ navigation }) => {
  const register = async ({ email, password }) => {
    console.log("Make HTTP request here to your derver");
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string().required("Required"),
        password: Yup.string().required("Required"),
      })}
      onSubmit={(values) => {
        register(values);
      }}
    >
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        touched,
        values,
        errors,
      }) => (
        <SafeAreaView style={{ flex: 1 }}>
          <KeyboardAvoidingView>
            <ScrollView>
              <View>
                <Text>Email</Text>
                <Input
                  placeholder="Email"
                  inputStyle={{ paddingHorizontal: 10, fontSize: 15 }}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  keyboardType="email-address"
                  errorMessage={
                    touched.email && errors.email ? errors.email : null
                  }
                  leftIcon={<AntDesign name="user" size={25} />}
                />

                <Text>Password</Text>
                <Input
                  placeholder="password"
                  inputStyle={{ paddingHorizontal: 10 }}
                  containerStyle=""
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  errorMessage={
                    touched.password && errors.password ? errors.password : null
                  }
                  secureTextEntry
                  leftIcon={<AntDesign name="lock1" size={25} />}
                />
                <Button onPress={handleSubmit} label="Register" />
                <View>
                  <Text>Don't have an account?</Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Signin screen")}
                  >
                    <Text style={{ color: "#E66A0D" }}>Back to login</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
      )}
    </Formik>
  );
};

export default Register;

const styles = StyleSheet.create({});
