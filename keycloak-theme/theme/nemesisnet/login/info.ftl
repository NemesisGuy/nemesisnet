<#import "template.ftl" as layout>
<@layout.registrationLayout displayMessage=true; section>
    <#if section = "header">
        <#if message.header??>${message.header}</#if>
    <#elseif section = "form">
        <div class="nn-info" style="text-align: center; margin-bottom: 24px;">
            <p>${message.summary?no_esc}</p>
        </div>
        <div style="text-align: center;">
            <#if pageRedirectUri??>
                <a href="${pageRedirectUri}" class="nn-btn nn-btn-primary">Continue</a>
            <#elseif actionUri??>
                <a href="${actionUri}" class="nn-btn nn-btn-primary">Continue</a>
            <#else>
                <a href="${url.loginUrl}" class="nn-btn nn-btn-secondary">Back to Login</a>
            </#if>
        </div>
    </#if>
</@layout.registrationLayout>
