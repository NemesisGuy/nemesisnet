import subprocess
import sys
import argparse

def run_command(command, description):
    print(f"Processing: {description}...")
    try:
        # We use shell=True and prefix with 'wsl ' for docker commands if on Windows
        # But since we are running this in an environment where 'wsl' might be needed, 
        # we will check the OS or just use the provided tool's context.
        result = subprocess.run(command, shell=True, check=True, capture_output=True, text=True)
        return result.stdout
    except subprocess.CalledProcessError as e:
        print(f"Error during {description}: {e.stderr}")
        sys.exit(1)

def main():
    parser = argparse.ArgumentParser(description="NemesisNet Deployment Script")
    parser.add_argument("branch", help="The branch to deploy to (e.g., dev, staging, main)")
    parser.add_argument("message", help="The git commit message")
    args = parser.parse_args()

    branch = args.branch
    message = args.message
    image_name = f"nemesisguy/nemesisnet:{branch}"

    print(f"--- Starting Deployment to [{branch}] ---")

    # 1. Git Operations
    run_command("git add .", "Staging changes")
    
    # Check if there are changes to commit
    status = run_command("git status --porcelain", "Checking for changes")
    if not status.strip():
        print("📝 No changes to commit. Skipping git push.")
    else:
        run_command(f'git commit -m "{message}"', "Committing changes")
        run_command(f"git push origin {branch}", f"Pushing to origin/{branch}")

    # 2. Docker Operations
    # Note: Using 'wsl' prefix for docker as per current environment config
    run_command(f"wsl docker build -t {image_name} .", f"Building Docker image {image_name}")
    run_command(f"wsl docker push {image_name}", f"Pushing image {image_name} to Docker Hub")

    print(f"--- Deployment to [{branch}] Complete! ---")
    print(f"Image: {image_name}")
    print(f"Branch: {branch}")

if __name__ == "__main__":
    main()
