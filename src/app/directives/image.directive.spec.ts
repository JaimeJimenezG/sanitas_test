import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: '<img default src="invalid-url.jpg">'
})
class TestComponent {}

describe('ImageDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update url on error', () => {
    const imgElement = fixture.debugElement.query(By.css('img')).nativeElement;
    spyOn(imgElement, 'setAttribute');
    imgElement.dispatchEvent(new Event('error'));  });
});
