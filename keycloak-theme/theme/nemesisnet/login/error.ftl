<#import "template.ftl" as layout>
<@layout.registrationLayout displayMessage=true; section>
    <#if section = "header">
        Error
    <#elseif section = "form">
        <div class="nn-info" style="text-align: center; margin-bottom: 24px;">
            <p>${message.summary?no_esc}</p>
        </div>
        <div style="text-align: center;">
            <a href="${url.loginUrl}" class="nn-btn nn-btn-secondary">Back to Login</a>
        </div>
    </#if>
</@layout.registrationLayout>
