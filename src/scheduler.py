from itertools import product

# Define workers, shifts, and availability
workers = ["Alice", "Bob", "Charlie", "Diana"]
shifts = ["Monday Morning", "Monday Evening", "Tuesday Morning", "Tuesday Evening"]
availability = {
    "Alice": ["Monday Morning", "Tuesday Morning", "Tuesday Evening"],
    "Bob": ["Monday Morning", "Monday Evening", "Tuesday Evening"],
    "Charlie": ["Monday Morning", "Monday Evening", "Tuesday Morning"],
    "Diana": ["Monday Evening", "Tuesday Morning", "Tuesday Evening"],
}

# Minimum number of shifts per worker
min_shifts = 1  

# Helper function to check if a schedule is valid
def is_valid_schedule(schedule):
    # Check if each shift is assigned to exactly one worker
    for shift in shifts:
        assigned_workers = [worker for worker in workers if schedule.get((worker, shift), 0) == 1]
        if len(assigned_workers) != 1:
            return False

    # Check if each worker meets the minimum number of shifts
    for worker in workers:
        total_shifts = sum(schedule.get((worker, shift), 0) for shift in shifts)
        if total_shifts < min_shifts:
            return False

    return True

# Generate all possible schedules
possible_schedules = list(product([0, 1], repeat=len(workers) * len(shifts)))

# Find a valid schedule
found_valid_schedule = False
for schedule_tuple in possible_schedules:
    # Convert tuple to dictionary for easier access
    schedule = {
        (worker, shift): schedule_tuple[i * len(shifts) + j]
        for i, worker in enumerate(workers)
        for j, shift in enumerate(shifts)
    }

    # Filter out schedules that violate availability
    if any(
        schedule[worker, shift] == 1 and shift not in availability[worker]
        for worker in workers
        for shift in shifts
    ):
        continue

    # Check if the schedule is valid
    if is_valid_schedule(schedule):
        # Print the schedule
        print("Valid schedule found:")
        for worker in workers:
            assigned_shifts = [
                shift
                for shift in shifts
                if schedule.get((worker, shift), 0) == 1
            ]
            print(f"{worker}: {', '.join(assigned_shifts)}")
        found_valid_schedule = True
        break

if not found_valid_schedule:
    print("No valid schedule found.")
    print("Debugging information:")
    print("Worker availabilities:")
    for worker, available_shifts in availability.items():
        print(f"  {worker}: {', '.join(available_shifts)}")
    print(f"Minimum shifts required per worker: {min_shifts}")
