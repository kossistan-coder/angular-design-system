// date-picker.component.ts
import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent {
  @Output() dateSelected = new EventEmitter<Date>();
  @Output() cancelled = new EventEmitter<void>();

  // State management
  showMonthMenu = false;
  showYearMenu = false;
  selectedDay: number | null = null;
  currentMonth: number = new Date().getMonth();
  currentYear: number = new Date().getFullYear();

  // Data
  months = ['January', 'February', 'March', 'April', 'May', 'June',
           'July', 'August', 'September', 'October', 'November', 'December'];
  years = [2023, 2024, 2025, 2026, 2027];
  weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  hours = Array.from({ length: 12 }, (_, i) => i + 1);
  minutes = Array.from({ length: 60 }, (_, i) => i);
  selectedHour: number = 12;
  selectedMinute: number = 0;
  selectedPeriod: string = 'PM';

  // Handle clicks outside dropdowns
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.relative')) {
      this.showMonthMenu = false;
      this.showYearMenu = false;
    }
  }

  get daysInMonth(): { day: number; isCurrentMonth: boolean }[] {
    const days = [];
    const date = new Date(this.currentYear, this.currentMonth, 1);
    // Premier jour du mois actuel (0 = dimanche, 1 = lundi, etc.)
    const firstDayIndex = (date.getDay() + 6) % 7; // ajuste pour lundi = 0

    // Dernier jour du mois précédent
    const prevMonthLastDay = new Date(this.currentYear, this.currentMonth, 0).getDate();

    // Ajoute les jours du mois précédent
    for (let i = firstDayIndex; i > 0; i--) {
      days.push({ day: prevMonthLastDay - i + 1, isCurrentMonth: false });
    }

    // Ajoute les jours du mois actuel
    const lastDay = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    for (let i = 1; i <= lastDay; i++) {
      days.push({ day: i, isCurrentMonth: true });
    }

    // Ajoute les jours du mois suivant pour compléter la grille
    const daysToAdd = 42 - days.length; // 6 semaines x 7 jours = 42
    for (let i = 1; i <= daysToAdd; i++) {
      days.push({ day: i, isCurrentMonth: false });
    }

    return days;
  }


  // get daysInMonth(): (number | null)[] {
  //   const days = [];
  //   const date = new Date(this.currentYear, this.currentMonth, 1);
  //   const firstDayIndex = (date.getDay() + 6) % 7;

  //   // Add empty days
  //   for (let i = 0; i < firstDayIndex; i++) days.push(null);

  //   // Add current month days
  //   const lastDay = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
  //   for (let i = 1; i <= lastDay; i++) days.push(i);

  //   // Fill remaining space
  //   while (days.length % 7 !== 0) days.push(null);

  //   return days;
  // }

  toggleMonthMenu(): void {
    this.showMonthMenu = !this.showMonthMenu;
    this.showYearMenu = false;
  }

  toggleYearMenu(): void {
    this.showYearMenu = !this.showYearMenu;
    this.showMonthMenu = false;
  }

  selectDay(day: number, isCurrentMonth: boolean): void {
    if (isCurrentMonth) {
      this.selectedDay = day;
    }
  }


  isSelected(day: number): boolean {
    return day === this.selectedDay;
  }

  prevMonth(): void {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.updateDate();
  }

  nextMonth(): void {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.updateDate();
  }

  updateDate(): void {
    this.selectedDay = null;
    this.showMonthMenu = false;
    this.showYearMenu = false;
  }

  onApply(): void {
    if (this.selectedDay !== null) {
      let hour = this.selectedHour;
      if (this.selectedPeriod === 'PM' && hour < 12) hour += 12;
      if (this.selectedPeriod === 'AM' && hour === 12) hour = 0;

      const selectedDate = new Date(
        this.currentYear,
        this.currentMonth,
        this.selectedDay,
        hour,
        this.selectedMinute
      );

      this.dateSelected.emit(selectedDate);
    }
  }

  onCancel(): void {
    this.cancelled.emit();
  }
}
