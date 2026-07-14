<#import "template.ftl" as layout>
<@layout.registrationLayout displayMessage=true; section>
    <#if section = "header">
        Update Password
    <#elseif section = "form">
        <form id="kc-passwd-update-form" action="${url.loginAction}" method="post">
            <div class="nn-input-group">
                <label for="password-new">New Password <span class="nn-required">*</span></label>
                <input type="password" id="password-new" name="password-new" autocomplete="new-password"
                       aria-invalid="<#if messagesPerField.existsError('password','password-new')>true</#if>"
                       placeholder="New password"/>
                <#if messagesPerField.existsError('password-new')>
                    <span class="nn-field-error">${kcSanitize(messagesPerField.get('password-new'))?no_esc}</span>
                </#if>
            </div>

            <div class="nn-input-group">
                <label for="password-confirm">Confirm Password <span class="nn-required">*</span></label>
                <input type="password" id="password-confirm" name="password-confirm" autocomplete="new-password"
                       aria-invalid="<#if messagesPerField.existsError('password-confirm')>true</#if>"
                       placeholder="Confirm new password"/>
                <#if messagesPerField.existsError('password-confirm')>
                    <span class="nn-field-error">${kcSanitize(messagesPerField.get('password-confirm'))?no_esc}</span>
                </#if>
            </div>

            <div id="kc-form-buttons">
                <input type="submit" class="nn-btn nn-btn-primary" value="Submit"/>
            </div>
        </form>
    </#if>
</@layout.registrationLayout>
