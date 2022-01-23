import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LordOfTheRingsLogicService } from 'src/app/services/lord-of-the-rings-logic.service';

@Component({
  selector: 'app-lord-of-the-rings',
  templateUrl: './lord-of-the-rings.component.html',
  styleUrls: ['./lord-of-the-rings.component.css']
})
export class LordOfTheRingsComponent implements OnInit {

  // Arrays to populate dropdowns
  names: any = [];
  genders: any = [];
  hairColors: any = [];
  races: any = [];

  // Save all characters to avoid multiple requests to server
  characters: any = [];

  // Array to hold data according to the selected criteria
  selectedCharacters: any = [];

  loading:boolean = false;

  public charactersForm: FormGroup;

  constructor(private fb: FormBuilder, private lordOfTheRingsLogicService: LordOfTheRingsLogicService) {
    this.charactersForm = this.fb.group({
      name: [''],
      hairColor: [''],
      gender: [''],
      race: ['']
    });
  }

  async ngOnInit(): Promise<void> {
    this.showLoading();

    // fetch all the characters from the server.
    this.characters = await this.lordOfTheRingsLogicService.fetchAllCharacters();

    // Pushing necessary data into arrays to display in dropdown.
    this.characters.forEach((character: any) => {
      this.names.push(character.name);
      this.hairColors.push(character.hair);
      this.genders.push(character.gender);
      this.races.push(character.race);
    });

    // Filtering duplicates from all arrays - names, hairColors, genders, races.
    this.filterDuplicates();

    // Saving all characters in selecters array to display initially as there is no filter.
    this.selectedCharacters = this.characters;

    this.hideLoading();
  }

  filterDuplicates() {
    let filteredNames = [...new Set(this.names)];
    this.names = filteredNames;

    let filteredHairColors = [...new Set(this.hairColors)];
    this.hairColors = filteredHairColors;

    let filteredGenders = [...new Set(this.genders)];
    this.genders = filteredGenders;

    let filteredRaces = [...new Set(this.races)];
    this.races = filteredRaces;
  }

  // Function to filter using multiple parameters like - name, hair color, gender, race.
  doAllFieldsMatch(character: any, charactersForm: any) {
    if (charactersForm.controls['name'].value !== null && charactersForm.controls['name'].value !== "" && charactersForm.controls['name'].value !== character.name)
      return false;
    if (charactersForm.controls['hairColor'].value !== null && charactersForm.controls['hairColor'].value !== "" && charactersForm.controls['hairColor'].value !== character.hair)
      return false;
    if (charactersForm.controls['gender'].value !== null && charactersForm.controls['gender'].value !== "" && charactersForm.controls['gender'].value !== character.gender)
      return false;
    if (charactersForm.controls['race'].value !== null && charactersForm.controls['race'].value !== "" && charactersForm.controls['race'].value !== character.race)
      return false;

    return true;
  }

  // Called everytime a filter is changed to filter characters according to latest criteria 
  fetchCharactersForSelectedCriteria(): void {
    this.selectedCharacters = this.characters.filter((value: any) => this.doAllFieldsMatch(value, this.charactersForm));
  }


  showLoading() {
    this.loading = true;
  }

  hideLoading() {
    this.loading = false;
  }
}
