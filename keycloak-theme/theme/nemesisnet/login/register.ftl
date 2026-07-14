<#import "template.ftl" as layout>
<@layout.registrationLayout displayMessage=true; section>
    <#if section = "header">
        Create Account
    <#elseif section = "form">
        <form id="kc-register-form" action="${url.registrationAction}" method="post">
            <div class="nn-input-group">
                <label for="firstName">First Name <span class="nn-required">*</span></label>
                <input type="text" id="firstName" name="firstName"
                       value="${(register.formData.firstName!'')}" autocomplete="given-name"
                       aria-invalid="<#if messagesPerField.existsError('firstName')>true</#if>"
                       placeholder="First name"/>
                <#if messagesPerField.existsError('firstName')>
                    <span class="nn-field-error">${kcSanitize(messagesPerField.get('firstName'))?no_esc}</span>
                </#if>
            </div>

            <div class="nn-input-group">
                <label for="lastName">Last Name <span class="nn-required">*</span></label>
                <input type="text" id="lastName" name="lastName"
                       value="${(register.formData.lastName!'')}" autocomplete="family-name"
                       aria-invalid="<#if messagesPerField.existsError('lastName')>true</#if>"
                       placeholder="Last name"/>
                <#if messagesPerField.existsError('lastName')>
                    <span class="nn-field-error">${kcSanitize(messagesPerField.get('lastName'))?no_esc}</span>
                </#if>
            </div>

            <div class="nn-input-group">
                <label for="email">Email <span class="nn-required">*</span></label>
                <input type="text" id="email" name="email"
                       value="${(register.formData.email!'')}" autocomplete="email"
                       aria-invalid="<#if messagesPerField.existsError('email')>true</#if>"
                       placeholder="Email address"/>
                <#if messagesPerField.existsError('email')>
                    <span class="nn-field-error">${kcSanitize(messagesPerField.get('email'))?no_esc}</span>
                </#if>
            </div>

            <#if !realm.registrationEmailAsUsername>
                <div class="nn-input-group">
                    <label for="username">Username <span class="nn-required">*</span></label>
                    <input type="text" id="username" name="username"
                           value="${(register.formData.username!'')}" autocomplete="username"
                           aria-invalid="<#if messagesPerField.existsError('username')>true</#if>"
                           placeholder="Username"/>
                    <#if messagesPerField.existsError('username')>
                        <span class="nn-field-error">${kcSanitize(messagesPerField.get('username'))?no_esc}</span>
                    </#if>
                </div>
            </#if>

            <#if passwordRequired??>
                <div class="nn-input-group">
                    <label for="password">Password <span class="nn-required">*</span></label>
                    <input type="password" id="password" name="password" autocomplete="new-password"
                           aria-invalid="<#if messagesPerField.existsError('password')>true</#if>"
                           placeholder="Password"/>
                    <#if messagesPerField.existsError('password')>
                        <span class="nn-field-error">${kcSanitize(messagesPerField.get('password'))?no_esc}</span>
                    </#if>
                </div>

                <div class="nn-input-group">
                    <label for="password-confirm">Confirm Password <span class="nn-required">*</span></label>
                    <input type="password" id="password-confirm" name="password-confirm" autocomplete="new-password"
                           aria-invalid="<#if messagesPerField.existsError('password-confirm')>true</#if>"
                           placeholder="Confirm password"/>
                    <#if messagesPerField.existsError('password-confirm')>
                        <span class="nn-field-error">${kcSanitize(messagesPerField.get('password-confirm'))?no_esc}</span>
                    </#if>
                </div>
            </#if>

            <div id="kc-form-buttons">
                <input type="submit" class="nn-btn nn-btn-primary" value="Register"/>
            </div>
        </form>

        <div style="text-align: center; margin-top: 16px;">
            <span class="nn-info">Already have an account? <a tabindex="6" class="nn-link" href="${url.loginUrl}">Sign In</a></span>
        </div>
    </#if>
</@layout.registrationLayout>
