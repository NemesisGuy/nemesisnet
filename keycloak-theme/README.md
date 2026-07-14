# NemesisNet Keycloak Theme

Custom Keycloak login theme matching the NemesisNet design system.

## Directory Structure

```
keycloak-theme/
  theme/
    nemesisnet/
      login/
        theme.properties          # Theme configuration
        login.ftl                # Login page
        register.ftl             # Registration page
        error.ftl                # Error page
        info.ftl                 # Info/message page
        update-password.ftl      # Password update page
        templates/
          template.ftl           # Base layout template
        resources/
          css/
            login.css            # All styles (NemesisNet dark theme)
          images/
            logo.png             # Add your logo here
```

## Deploy to Keycloak

### Option 1: Direct copy (simplest)

Copy the `theme/nemesisnet` folder into Keycloak's theme directory:

```bash
# Docker
docker cp theme/nemesisnet <container>:/opt/keycloak/themes/

# Or mount as volume in docker-compose
volumes:
  - ./theme/nemesisnet:/opt/keycloak/themes/nemesisnet
```

### Option 2: Build a JAR (production)

```bash
cd keycloak-theme
jar cf nemesisnet-keycloak-theme.jar -C theme .
# Then deploy the JAR to Keycloak's providers directory
```

### Option 3: Build with Maven

Add a `pom.xml` to build as a Keycloak theme provider.

## Activate the Theme

1. Open Keycloak Admin Console
2. Go to **Realm Settings** > **Themes**
3. Set **Login Theme** to `nemesisnet`
4. Save

## Customize

- **Logo**: Replace `resources/images/logo.png` with your logo (80x80px recommended)
- **Colors**: Edit CSS variables in `:root` section of `login.css`
- **Font**: Change `--nn-font` variable
- **Add pages**: Create new `.ftl` files following the existing pattern

## Design Tokens

| Token | Value | Used for |
|-------|-------|----------|
| `--nn-blue` | `#1E88E5` | Primary accent |
| `--nn-blue-bright` | `#2979FF` | Hover states |
| `--nn-teal` | `#00C2A8` | Secondary accent |
| `--nn-black` | `#0a0e27` | Background |
| `--nn-white` | `#F4F4F4` | Text |
