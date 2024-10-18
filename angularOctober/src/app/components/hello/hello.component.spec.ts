import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloComponent } from './hello.component';
import { By } from '@angular/platform-browser';

describe('HelloComponent', () => {
  let component: HelloComponent;
  let fixture: ComponentFixture<HelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('displayName', () => {
    it('returns "World" as displayName when no name is given', () => {
      expect(component.displayName).toEqual('World');
    });
    it('returns "Sebastian" as displayName when given name is "Sebastian"', () => {
      const name = 'Sebastian';
      component.name = name;

      const method = component.displayName;

      expect(method).toEqual(name);
    });

    it('returns "Hello World" as displayName when no name is given', () => {
      expect(fixture.debugElement.query(By.css('#hello_word'))
        .nativeElement.innerText
      )
        .toEqual('Hello World');
    });

    it('returns "Hello Sebastian" as displayName when name is "Sebastian"', () => {
      component.name = 'Sebastian';
      fixture.detectChanges();

      const text = fixture.debugElement
        .query(By.css('#hello_word'))
        .nativeElement.innerText;

      expect(text).toEqual('Hello Sebastian');
    });
  });
});
