import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloInputComponent } from './hello-input.component';
import { By } from '@angular/platform-browser';
import { NameInputComponent } from '../name-input/name-input.component';

describe('HelloInputComponent', () => {
  let component: HelloInputComponent;
  let fixture: ComponentFixture<HelloInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloInputComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HelloInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('show hello at beginning', () => {
    const paragraph = fixture.debugElement.query(By.css('p')).nativeElement;
    expect(paragraph.innerText).toContain('Hello');
  });

  it('show hello after triggering handelNewName', () => {
    component.handleNewName('Max');
    fixture.detectChanges();

    const paragraph = fixture.debugElement.query(By.css('p')).nativeElement;

    expect(paragraph.innerText).toContain('Hello Max');
  });

  it('show hello after triggering by output', () => {
    const nameInput = fixture.debugElement
      .query(By.directive(NameInputComponent))
      .componentInstance;
    nameInput.nameSubmitted.emit('Max');

    fixture.detectChanges();

    const paragraph = fixture.debugElement.query(By.css('p')).nativeElement;
    expect(paragraph.innerText).toContain('Hello Max');
  });
});
