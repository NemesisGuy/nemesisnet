<#macro registrationLayout displayInfo=true displayMessage=true displayRequiredFields=true showPasswordField=false>
<!DOCTYPE html>
<html class="${properties.kcHtmlClass!}" lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${msg("loginTitle",(realm.displayName!''))}</title>
    <#if properties.stylesCommon?has_content>
        <#list properties.stylesCommon?split(' ') as style>
            <link rel="stylesheet" href="${url.resourcesCommonPath}/${style}">
        </#list>
    </#if>
    <#if properties.styles?has_content>
        <#list properties.styles?split(' ') as style>
            <link rel="stylesheet" href="${url.resourcesPath}/${style}">
        </#list>
    </#if>
</head>
<body class="${properties.kcBodyClass!}">
    <div class="${properties.kcLoginClass!}">
        <header class="${properties.kcHeaderClass!}">
            <div id="${properties.kcHeaderWrapperId!'kc-header-wrapper'}">
                ${msg("loginTitleHtml",(realm.displayName!''))}
            </div>
        </header>
        <div class="${properties.kcFormCardClass!}">
            <#if displayMessage?? && displayMessage>
                <#if message?has_content && (message.type != 'warning' || !isInternationalizedMessage?? || msgSkipLink??)>
                    <div class="alert alert-${message.type}">
                        <#if message.type = 'error'><span class="pficon pficon-error-circle-o"></span></#if>
                        <#if message.type = 'warning'><span class="pficon pficon-warning-triangle-o"></span></#if>
                        <#if message.type = 'success'><span class="pficon pficon-ok"></span></#if>
                        <#if message.type = 'info'><span class="pficon pficon-info"></span></#if>
                        <span class="kc-feedback-text">${kcSanitize(message.summary)?no_esc}</span>
                    </div>
                </#if>
            </#if>
            <div style="text-align: center; margin-bottom: 16px;">
                <#nested "header">
            </div>
            <#nested "form">
            <#nested "info">
            <#nested "socialProviders">
        </div>
        <#nested "scripts">
    </div>
</body>
</html>
</#macro>
