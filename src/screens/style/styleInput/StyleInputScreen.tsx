import React, {useState} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';

import {Icon} from '@ui-kitten/components';
import {SafeAreaView} from "react-native-safe-area-context";

import {AppBar} from "../../../components/app/AppBar.tsx";
import {AppInput} from '../../../components/app/AppInput.tsx';
import {AppText, TEXT_TYPES} from '../../../components/app/AppText';

import {AppColor} from '../../../styles/AppColor';
import {AppSpace} from '../../../styles/AppSpace';
import {AppStyle} from "../../../styles/AppStyle.ts";

const StyleInputScreen: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phone: '',
    bio: '',
    search: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    phone: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({...prev, [field]: value}));
    // Clear error when user starts typing
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({...prev, [field]: ''}));
    }
  };

  const validateForm = () => {
    const newErrors = {...errors};

    if (!formData.username.trim()) {
      newErrors.username = '用户名不能为空';
    }

    if (!formData.email.trim()) {
      newErrors.email = '邮箱不能为空';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = '请输入有效的邮箱地址';
    }

    if (!formData.password.trim()) {
      newErrors.password = '密码不能为空';
    } else if (formData.password.length < 6) {
      newErrors.password = '密码至少需要6位';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = '手机号不能为空';
    } else if (!/^1[3-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = '请输入有效的手机号';
    }

    setErrors(newErrors);
  };

  return (
      <SafeAreaView style={AppStyle.container}>

        <AppBar
            title={'App Input'}
        />

        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          <View style={styles.content}>

            {/* Basic Input Examples */}
            <View style={styles.section}>
              <AppText.Header style={styles.sectionSubtitle}>
                基础输入框
              </AppText.Header>

              <View style={styles.inputGroup}>
                <AppText.Caption style={styles.inputLabel}>
                  默认输入框
                </AppText.Caption>
                <AppInput
                    placeholder="请输入用户名"
                    value={formData.username}
                    onChangeText={(value) => handleInputChange('username', value)}
                    error={errors.username}
                    containerStyle={styles.inputContainer}
                />
              </View>

              <View style={styles.inputGroup}>
                <AppText type={TEXT_TYPES.CAPTION} style={styles.inputLabel}>
                  带标签的输入框
                </AppText>
                <AppInput
                    label="邮箱地址"
                    placeholder="请输入邮箱"
                    value={formData.email}
                    onChangeText={(value) => handleInputChange('email', value)}
                    error={errors.email}
                    required
                    keyboardType="email-address"
                    autoCapitalize="none"
                    containerStyle={styles.inputContainer}
                />
              </View>

              <View style={styles.inputGroup}>
                <AppText.Caption style={styles.inputLabel}>
                  密码输入框
                </AppText.Caption>
                <AppInput
                    label="密码"
                    placeholder="请输入密码"
                    value={formData.password}
                    onChangeText={(value) => handleInputChange('password', value)}
                    secureTextEntry
                    error={errors.password}
                    required
                    containerStyle={styles.inputContainer}
                />
              </View>
            </View>

            {/* Input Types */}
            <View style={styles.section}>
              <AppText.Header style={styles.sectionSubtitle}>
                输入框类型
              </AppText.Header>

              <View style={styles.inputGroup}>
                <AppText.Caption style={styles.inputLabel}>
                  轮廓样式 (Outlined)
                </AppText.Caption>
                <AppInput.Outlined
                    placeholder="轮廓样式输入框"
                    containerStyle={styles.inputContainer}
                />
              </View>

              <View style={styles.inputGroup}>
                <AppText.Caption style={styles.inputLabel}>
                  填充样式 (Filled)
                </AppText.Caption>
                <AppInput.Filled
                    placeholder="填充样式输入框"
                    containerStyle={styles.inputContainer}
                />
              </View>

              <View style={styles.inputGroup}>
                <AppText.Caption style={styles.inputLabel}>
                  圆角样式 (Rounded)
                </AppText.Caption>
                <AppInput.Rounded
                    placeholder="圆角样式输入框"
                    containerStyle={styles.inputContainer}
                />
              </View>
            </View>

            {/* Input with Accessories */}
            <View style={styles.section}>
              <AppText.Header style={styles.sectionSubtitle}>
                带图标的输入框
              </AppText.Header>

              <View style={styles.inputGroup}>
                <AppText.Caption style={styles.inputLabel}>
                  左侧图标
                </AppText.Caption>
                <AppInput
                    placeholder="搜索内容"
                    value={formData.search}
                    onChangeText={(value) => handleInputChange('search', value)}
                    accessoryLeft={(props) => (
                        <Icon {...props} name="search" style={{width: 20, height: 20}}/>
                    )}
                    containerStyle={styles.inputContainer}
                />
              </View>

              <View style={styles.inputGroup}>
                <AppText.Caption style={styles.inputLabel}>
                  右侧图标
                </AppText.Caption>
                <AppInput
                    placeholder="请输入手机号"
                    value={formData.phone}
                    onChangeText={(value) => handleInputChange('phone', value)}
                    error={errors.phone}
                    keyboardType="phone-pad"
                    accessoryRight={(props) => (
                        <Icon {...props} name="phone" style={{width: 20, height: 20}}/>
                    )}
                    containerStyle={styles.inputContainer}
                />
              </View>

              <View style={styles.inputGroup}>
                <AppText.Caption style={styles.inputLabel}>
                  左右都有图标
                </AppText.Caption>
                <AppInput
                    placeholder="用户名"
                    accessoryLeft={(props) => (
                        <Icon {...props} name="person" style={{width: 20, height: 20}}/>
                    )}
                    accessoryRight={(props) => (
                        <Icon {...props} name="checkmark-circle" style={{width: 20, height: 20}}/>
                    )}
                    containerStyle={styles.inputContainer}
                />
              </View>
            </View>

            {/* Keyboard Types */}
            <View style={styles.section}>
              <AppText.Header style={styles.sectionSubtitle}>
                键盘类型
              </AppText.Header>

              <View style={styles.inputGroup}>
                <AppText.Caption style={styles.inputLabel}>
                  数字键盘 (numeric)
                </AppText.Caption>
                <AppInput
                    placeholder="请输入年龄"
                    keyboardType="numeric"
                    containerStyle={styles.inputContainer}
                />
              </View>

              <View style={styles.inputGroup}>
                <AppText.Caption style={styles.inputLabel}>
                  URL键盘 (url)
                </AppText.Caption>
                <AppInput
                    placeholder="请输入网址"
                    keyboardType="url"
                    autoCapitalize="none"
                    containerStyle={styles.inputContainer}
                />
              </View>

              <View style={styles.inputGroup}>
                <AppText.Caption style={styles.inputLabel}>
                  搜索键盘 (web-search)
                </AppText.Caption>
                <AppInput
                    placeholder="搜索内容"
                    keyboardType="web-search"
                    containerStyle={styles.inputContainer}
                />
              </View>

              <View style={styles.inputGroup}>
                <AppText.Caption style={styles.inputLabel}>
                  多行输入 (multiline)
                </AppText.Caption>
                <AppInput
                    placeholder="请输入多行文本"
                    multiline
                    numberOfLines={3}
                    textAlignVertical="top"
                    containerStyle={styles.inputContainer}
                />
              </View>
            </View>

            {/* Helper Text */}
            <View style={styles.section}>
              <AppText.Header style={styles.sectionSubtitle}>
                辅助文本
              </AppText.Header>

              <View style={styles.inputGroup}>
                <AppText type={TEXT_TYPES.CAPTION} style={styles.inputLabel}>
                  带辅助文本的输入框
                </AppText>
                <AppInput
                    label="个人简介"
                    placeholder="请输入个人简介"
                    value={formData.bio}
                    onChangeText={(value) => handleInputChange('bio', value)}
                    helperText="请简要介绍自己，不超过100字"
                    containerStyle={styles.inputContainer}
                />
              </View>
            </View>

            {/* Disabled State */}
            <View style={styles.section}>
              <AppText.Header style={styles.sectionSubtitle}>
                禁用状态
              </AppText.Header>

              <View style={styles.inputGroup}>
                <AppText.Caption style={styles.inputLabel}>
                  禁用的输入框
                </AppText.Caption>
                <AppInput
                    placeholder="禁用的输入框"
                    value="这是禁用的内容"
                    disabled
                    containerStyle={styles.inputContainer}
                />
              </View>
            </View>

            {/* Validation Example */}
            <View style={styles.section}>
              <AppText.Header style={styles.sectionSubtitle}>
                表单验证示例
              </AppText.Header>

              <AppText.Body style={styles.helperText}>
                填写完表单后，点击下方按钮进行验证
              </AppText.Body>

              <View style={styles.buttonContainer}>
                <AppText.Label
                    style={styles.validateButton}
                    onPress={validateForm}
                >
                  验证表单
                </AppText.Label>
              </View>
            </View>

          </View>
        </ScrollView>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColor.background,
  },
  content: {
    padding: AppSpace.screenPadding,
  },
  sectionTitle: {
    color: AppColor.textPrimary,
    marginBottom: AppSpace.sectionSpacing,
    textAlign: 'center',
  },
  section: {
    marginBottom: AppSpace.sectionSpacing,
  },
  sectionSubtitle: {
    color: AppColor.textPrimary,
    marginBottom: AppSpace.md,
    fontSize: 18,
    fontWeight: '600',
  },
  inputGroup: {
    marginBottom: AppSpace.lg,
  },
  inputLabel: {
    color: AppColor.textSecondary,
    marginBottom: AppSpace.sm,
    fontSize: 14,
    fontWeight: '500',
  },
  inputContainer: {
    marginBottom: AppSpace.sm,
  },
  helperText: {
    color: AppColor.textSecondary,
    marginBottom: AppSpace.md,
    fontSize: 14,
    lineHeight: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: AppSpace.md,
  },
  validateButton: {
    backgroundColor: AppColor.primary,
    color: AppColor.white,
    paddingHorizontal: AppSpace.xl,
    paddingVertical: AppSpace.md,
    borderRadius: 8,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default StyleInputScreen;